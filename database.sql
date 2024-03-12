CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80) NOT NULL,
    "role_id" INT NOT NULL
);

CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) NOT NULL
);

CREATE TABLE "rsvp" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(50) NOT NULL,
	"last_name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(75) NOT NULL,
	"phone" BIGINT,
	"user_id" INT
);

CREATE TABLE "rsvp_events" (
	"id" SERIAL PRIMARY KEY,
	"event_id" INT,
	"rsvp_id" INT
);

CREATE TABLE "events" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"time" BIGINT NOT NULL,
	"location" VARCHAR (80),
	"street" VARCHAR (100) NOT NULL,
	"city" VARChAR (80) NOT NULL,
	"state" VARCHAR (80) NOT NULL,
	"zip" BIGINT NOT NULL,
	"cost" BIGINT,
	"details" VARCHAR (300)
	);

INSERT INTO "rsvp" ("first_name", "last_name", "email", "phone")
VALUES ('firstName','lastName', 'test@gmail.com', 1234567890);

DROP TABLE "rsvp";

DROP TABLE "rsvp_events";