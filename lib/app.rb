require 'sinatra'
require 'sinatra/reloader' if development?
require 'data_mapper'

# If you want the logs displayed you have to do this before the call to setup
DataMapper::Logger.new($stdout, :debug)

# An in-memory Sqlite3 connection:
DataMapper.setup(:default, 'sqlite:data.db')

class Todo
  include DataMapper::Resource

  property :id,         Serial
  property :text,       Text
  property :created_at, DateTime, :default => lambda { |r,p| Time.now }
  property :done,       Boolean, :default => false
end

DataMapper.finalize
DataMapper.auto_upgrade!

#todo = Todo.create(text: "First todo")
#todo = Todo.create(text: "second todo")
 
# API

before '/todo*' do
  content_type 'application/json'
end

get '/' do
  @todos = Todo.all
  erb :index, views: "lib/public"
end

get '/todos' do
  Todo.all.to_json
end

get '/todos/:id' do
  todo = Todo.get(params[:id])
  todo.to_json
end

put '/todos/:id' do
  todo = Todo.get(params[:id])
  todo.update(json_data)
end

post '/todos' do
  Todo.create(json_data)
end

delete '/todos/:id' do
  todo = Todo.get(params[:id])
  todo.destroy
end

def json_data
  JSON.parse(request.body.read)
end
