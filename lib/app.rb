require 'sinatra'
require 'sinatra/reloader' if development?
require 'data_mapper'

# If you want the logs displayed you have to do this before the call to setup
DataMapper::Logger.new($stdout, :debug)

# A Sqlite3 connection:
DataMapper.setup(:default, 'sqlite:data.db')

# Simple Todo model
class Todo
  include DataMapper::Resource

  property :id,         Serial
  property :text,       Text
  property :created_at, DateTime, :default => lambda { |r,p| Time.now }
  property :done,       Boolean, :default => false
end

DataMapper.finalize
DataMapper.auto_upgrade!


# Deliver index file with a bootstrapped todo collection.
get '/' do
  @todos = Todo.all
  erb :index, views: "lib/public"
end

# API
before '/todos*' do
  content_type 'application/json'
end

# !!!
# Be Careful! There is no authentication in place and no sanitizing of the data. This is simply a convenience api.

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
  todo.to_json
end

post '/todos' do
  todo = Todo.create(json_data)
  todo.to_json
end

delete '/todos/:id' do
  todo = Todo.get(params[:id])
  todo.destroy
end

# Transforms the request body into JSON.
def json_data
  JSON.parse(request.body.read)
end
