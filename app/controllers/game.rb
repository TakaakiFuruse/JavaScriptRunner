
#user welcome
get '/welcome' do
  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# play a game
get '/racer' do
  erb :'/racer'
end
