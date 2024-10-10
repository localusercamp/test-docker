compose=docker compose

devcompose=$(compose) -f ./docker/dev/compose.yaml

dev-up:
	$(devcompose) up -d

dev-fresh-up:
	$(devcompose) build --no-cache
	$(devcompose) up -d

dev-stop:
	$(devcompose) stop nitrodeno-app

dev-shell:
	$(devcompose) exec nitrodeno-app ash