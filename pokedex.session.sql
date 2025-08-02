SELECT id,
       name
FROM pokemon
WHERE name LIKE '% %'
    AND id NOT IN (
        29,
        32,
        772,
        785,
        786,
        787,
        788,
        984,
        985,
        986,
        987,
        988,
        989,
        990,
        991,
        992,
        993,
        994,
        995,
        1005,
        1006,
        1009,
        1010,
        1020,
        1021,
        1022,
        1023
    );

SELECT id,
       name
FROM pokemon
WHERE name IN (
     'Aegislash',  'Basculin',   'Basculegion',
  'Chien-Pao',  'Chi-Yu',     'Darmanitan',
  'Deoxys',     'Eiscue',
  'Hakamo-o',   'Ho-Oh',      'Indeedee',
  'Jangmo-o',   'Kommo-o',    'Lycanroc',
  'Mewstic',    'Mimikyu',    'Mime Jr.',
  'Morpeko',    'Mr. Mime',   'Mr. Rime', 'Oricorio'
  'Porygon-Z', 'Ting-Lu',
  'Toxtricity', 'Type: Null', 'Urshifu',
  'Wishiwashi', 'Wo-Chien',   'Wormadam',
  'Zygarde')
  ORDER BY name;

SELECT id, name FROM pokemon WHERE id = 474;


UPDATE pokemon SET name = 'Aegislash' WHERE id = 681;
UPDATE pokemon SET name = 'Basculin' WHERE id = 550;
UPDATE pokemon SET name = 'Basculegion' WHERE id = 902;
UPDATE pokemon SET name = 'Chien-Pao' WHERE id = 1010;
UPDATE pokemon SET name = 'Chi-Yu' WHERE id = 1021;
UPDATE pokemon SET name = 'Darmanitan' WHERE id = 555;
UPDATE pokemon SET name = 'Deoxys' WHERE id = 386;
UPDATE pokemon SET name = 'Eiscue' WHERE id = 875;
UPDATE pokemon SET name = 'Hakamo-o' WHERE id = 783;
UPDATE pokemon SET name = 'Ho-Oh' WHERE id = 250;
UPDATE pokemon SET name = 'Indeedee' WHERE id = 876;
UPDATE pokemon SET name = 'Jangmo-o' WHERE id = 782;
UPDATE pokemon SET name = 'Kommo-o' WHERE id = 784;
UPDATE pokemon SET name = 'Lycanroc' WHERE id = 745;
UPDATE pokemon SET name = 'Mewstic' WHERE id = 678;
UPDATE pokemon SET name = 'Mimikyu' WHERE id = 778;
UPDATE pokemon SET name = 'Mime Jr.' WHERE id = 439;
UPDATE pokemon SET name = 'Morpeko' WHERE id = 877;
UPDATE pokemon SET name = 'Mr. Mime' WHERE id = 122;
UPDATE pokemon SET name = 'Mr. Rime' WHERE id = 866;
UPDATE pokemon SET name = 'Oricorio' WHERE id = 741;
UPDATE pokemon SET name = 'Porygon-Z' WHERE id = 474;
UPDATE pokemon SET name = 'Ting-Lu' WHERE id = 1020;
UPDATE pokemon SET name = 'Toxtricity' WHERE id = 849;
UPDATE pokemon SET name = 'Eiscue' WHERE id = 875;
UPDATE pokemon SET name = 'Indeedee' WHERE id = 876;
UPDATE pokemon SET name = 'Morpeko' WHERE id = 877;
UPDATE pokemon SET name = 'Urshifu' WHERE id = 892;
UPDATE pokemon SET name = 'Basculegion' WHERE id = 902;
UPDATE pokemon SET name = 'Wo-Chien' WHERE id = 1009;
UPDATE pokemon SET name = 'Chien-Pao' WHERE id = 1010;
UPDATE pokemon SET name = 'Ting-Lu' WHERE id = 1020;
UPDATE pokemon SET name = 'Chi-Yu' WHERE id = 1021;

-- UPDATE pokemon SET name = 'Farfetch\'d' WHERE id = 83;