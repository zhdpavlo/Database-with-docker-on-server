CREATE TABLE public.gemeinde (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO public.gemeinde (id, name, email) VALUES
(1, 'Xenofon', 'xg@treelogics.de'),
(2, 'Pavlo', 'pszhd01@gmail.com'),
(3, 'Judith', 'judith@gmail.com'),
(4, 'Anna', 'anna@gmail.com');