INSTALLED_APPS = [
...
'app',
'rest_framework',
'corsheaders'
]

MIDDLEWARE = [
...
'django.contrib.sessions.middleware.SessionMiddleware',
'corsheaders.middleware.CorsMiddleware',
...
]

REST_FRAMEWORK = {
'DEFAULT_PERMISSION_CLASSES': [
'rest_framework.permissions.AllowAny',
]
}

CORS_ALLOWED_ORIGINS = [
'http://localhost:3000' # i am using 3000 port to run the frontend server
]