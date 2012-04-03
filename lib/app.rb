require 'sinatra'
require 'sinatra/reloader' if development?
require 'data_mapper'

# If you want the logs displayed you have to do this before the call to setup
DataMapper::Logger.new($stdout, :debug)

# An in-memory Sqlite3 connection:
DataMapper.setup(:default, 'sqlite::memory:')

class Todo
  include DataMapper::Resource

  property :id,         Serial
  property :text,       Text
  property :created_at, DateTime, :default => lambda { |r,p| Time.now }
end

DataMapper.finalize
DataMapper.auto_migrate!

todo = Todo.create(text: "First todo")
todo = Todo.create(text: "second todo")
 
before '/todo*' do
  content_type 'application/json'
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
  todo.update(params[:todo])
end

post '/todos' do
  Todo.create(params[:todo])
end

delete '/todos/:id' do
  todo = Todo.get(params[:id])
  todo.destroy
end
