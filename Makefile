clean:
	rm -rf node_modules package-lock.json yarn.lock
loadenv:
	source .env && echo 'Envs loaded'
dev: clean loadenv
	docker-compose up --build 
build: clean loadenv
	docker build -t ${IMAGE_NAME} .
test: build
	docker run -p ${PORT}:${PORT} ${IMAGE_NAME}