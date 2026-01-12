#!/bin/sh
set -e

# Apply database migrations and collect static files
python manage.py migrate --noinput

# Ensure STATIC_ROOT exists so collectstatic won't fail (set in settings.py)
mkdir -p /app/staticfiles

python manage.py collectstatic --noinput --clear

# Start Gunicorn
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000
