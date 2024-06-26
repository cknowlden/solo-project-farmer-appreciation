CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role_id" INT DEFAULT 2
);

INSERT INTO "user" ("username", "password")
    VALUES ('admin', 'p@ssw0rd!!') RETURNING id;
    
INSERT INTO "user" ("username", "password", "role_id")
	VALUES ('admin', 'password!!', 3);
    
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
	"event_id" INT,
	"event_name" VARCHAR (255),
);

INSERT INTO "rsvp" ("first_name", "last_name", "email", "phone", "event_id")
VALUES ('firstName','lastName', 'test@gmail.com', 1234567890, 2);

DROP TABLE "rsvp";

CREATE TABLE "rsvp_events" (
	"id" SERIAL PRIMARY KEY,
	"event_id" INT,
	"rsvp_id" INT
);

SELECT COUNT(id) FROM "rsvp" WHERE "event_id" = 1;

SELECT COUNT("rsvp".id) FROM "rsvp" JOIN "events" ON "rsvp".event_id = "events".id WHERE "events".name = 'Farmer Appreciation Dinner';

  SELECT "rsvp".first_name, "rsvp".last_name, "rsvp".email, "rsvp".phone, "rsvp".event_id, "events".name FROM "rsvp" JOIN "events" ON "rsvp".event_id = "events".id ORDER BY "name" ASC;

DROP TABLE "rsvp_events";

CREATE TABLE "events" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"date" timestamp (0),
	"location" VARCHAR (80),
	"street" VARCHAR (100) NOT NULL,
	"city" VARCHAR (80) NOT NULL,
	"state" VARCHAR (80) NOT NULL,
	"zip" BIGINT NOT NULL,
	"cost" VARCHAR (10),
	"image" VARCHAR,
	"details" VARCHAR (300),
	"userid" BIGINT
	);

INSERT INTO "events" ("name", "date", "location", "street", "city", "state", "zip", "cost", "image", "details")
VALUES ('Farmer Appreciation Chicken Dinner', '2024-05-20T19:26', 'Miltrim Farms', '115315 W Townline Rd', 'Athens', 'WI', 54411, 'free', 'images/farmer_planting.jpg', 'Come gather with your fellow farming community and enjoy a free chicken dinner, share some laughs, listen to our guest speaker, and learn about mental health resources available to you.'),
		('End the Stigma 5K Fun Run', '2024-06-06T11:00', 'River Walk', '1234 Address Rd', 'Wausau', 'WI', 54401, 20, 'images/run.jpg', 'Enjoy this fun run to raise awareness for mental health.  All proceeds will go towards supporting a free mental health clinic for our community.'),
		('Mental Health Resource Fair', '2024-08-10T14:00', 'City Community Center', '8679 Express Way', 'Manitowoc', 'WI', 54401, 8, 'images/rocks.jpg', 'Mental Health resource fair includes free screenings, yoga and meditation sessions, Tai Chi in the park, and access to licensed therapists'),
				('Self-Care Saturday', '2024-08-10T14:00', 'Lake View Park', 'Cherry Blossom Blvd', 'Madison', 'WI', 53348, 27, 'images/breathe.jpg', 'Learn the importance of self-care from our guest speakers and groove to live music from local artists');
	
SELECT * FROM "events"
	ORDER BY "date";
	
SELECT * FROM "events" WHERE "events".zip = '54401';

DROP TABLE "events";

   SELECT *, (SELECT COUNT(*) FROM "rsvp") FROM "events"
      ORDER BY "date";

CREATE TABLE "resources" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80) NOT NULL,
	"link" VARCHAR (255) NOT NULL,
	"description" VARCHAR NOT NULL
	);

INSERT INTO "resources" ("title", "link", "description")
VALUES ('Prevent Suicide Wisconsin (PSW)', 'https://www.preventsuicidewi.org/home','Prevent Suicide Wisconsin (PSW) is a statewide public-private partnership whose mission is to reduce the number of people who attempt and/or die by suicide in Wisconsin.'),
	('Western Regional Agricultural Stress Assistance Program','https://farmstress.us/', 'WRASAP recognizes that high levels of stress have been present in our agricultural communities. Causes include unstable finances, carrying the pressure of multigenerational farm lineage, injury, chronic/acute illness, adverse weather and climate change, and recent COVID-19 stressors. We want to make sure that you, your family, and people you work with have access to the resources needed, when they’re needed.'),
	('Apple Podcasts: Cutivating Resilience','https://podcasts.apple.com/us/podcast/cultivating-resilience/id1623202122','If you’re a farmer, you know the joy of working the land: the cadence of the seasons, the understanding of the natural world, the tangible results of your hard work. But you probably also know how stressful it can be. From family and finance pressures, to isolation and an exhausting job that has no days off.');

DROP TABLE "resources";

SELECT * FROM "resources"
	ORDER BY "title" DESC;

CREATE TABLE "information" (
	"id" SERIAL PRIMARY KEY,
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

SELECT * FROM "information";

DROP TABLE "information";
