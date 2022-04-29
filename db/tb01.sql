-- Table: public.tb01

-- DROP TABLE IF EXISTS public.tb01;

CREATE TABLE IF NOT EXISTS public.tb01
(
    id integer NOT NULL DEFAULT nextval('tb01_id_seq'::regclass),
    col_texto character varying(100) COLLATE pg_catalog."default",
    col_dt timestamp without time zone,
    CONSTRAINT tb01_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tb01
    OWNER to postgres;