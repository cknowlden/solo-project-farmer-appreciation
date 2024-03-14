CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role_id" INT DEFAULT 2
);

INSERT INTO "user" ("username", "password")
    VALUES ('user', 'password') RETURNING id;
    
DROP TABLE "user";

CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) NOT NULL
);

INSERT INTO "roles" ("type")
VALUES ('guest'),('reg_user'),('admin');


CREATE TABLE "rsvp" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(50) NOT NULL,
	"last_name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(75) NOT NULL,
	"phone" BIGINT,
	"user_id" INT
);

DROP TABLE "rsvp";

INSERT INTO "rsvp" ("first_name", "last_name", "email", "phone")
VALUES ('firstName','lastName', 'test@gmail.com', 1234567890);

CREATE TABLE "rsvp_events" (
	"id" SERIAL PRIMARY KEY,
	"event_id" INT,
	"rsvp_id" INT
);

DROP TABLE "rsvp_events";

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
	"image" VARCHAR,
	"details" VARCHAR (300)
	);

CREATE TABLE "resources" (
	"title" VARCHAR (80) NOT NULL,
	"link" VARCHAR (255) NOT NULL,
	"description" VARCHAR NOT NULL
	);

INSERT INTO "resources" ("title", "link", "description")
VALUES ('Prevent Suicide Wisconsin (PSW)', 'https://www.preventsuicidewi.org/home','Prevent Suicide Wisconsin (PSW) is a statewide public-private partnership whose mission is to reduce the number of people who attempt and/or die by suicide in Wisconsin.'),
	('Wester Regional Agricultural Stress Assistance Program','https://farmstress.us/', 'WRASAP recognizes that high levels of stress have been present in our agricultural communities. Causes include unstable finances, carrying the pressure of multigenerational farm lineage, injury, chronic/acute illness, adverse weather and climate change, and recent COVID-19 stressors. We want to make sure that you, your family, and people you work with have access to the resources needed, when they’re needed.'),
	('Apple Podcasts: Cutivating Resilience','https://podcasts.apple.com/us/podcast/cultivating-resilience/id1623202122','If you’re a farmer, you know the joy of working the land: the cadence of the seasons, the understanding of the natural world, the tangible results of your hard work. But you probably also know how stressful it can be. From family and finance pressures, to isolation and an exhausting job that has no days off.');

DROP TABLE "resources";

CREATE TABLE "information" (
	"fact" BOOLEAN default true,
	"description" VARCHAR NOT NULL
	);

INSERT INTO "information" ("description")
VALUES ('Suicide is the 11th leading cause of death in the US'),
	('In 2021, men died by suicide 3.90x more than women'),
	('On average, there are 132 suicides per day'),
	('Caucasian males accounted for 69.68% of suicide deaths in 2021'),
	('In 2021, firearms accounted for 54.64% of all suicide deaths'),
	('94% of adults surveyed in the U.S. believe that suicide can be prevented');

