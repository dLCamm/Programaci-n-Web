
FROM python:3.11-slim-bookworm

RUN useradd -m miiuser

WORKDIR /home/appuser/app

COPY requeriement.txt .
RUN pip install --no-cache-dir -r requeriement.txt

COPY . .

USER miiuser

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
