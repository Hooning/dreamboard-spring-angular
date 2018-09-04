DROP TABLE IF EXISTS board;

CREATE TABLE board (
  board_id SERIAL PRIMARY KEY,
  board_name VARCHAR(50) NOT NULL,
  category VARCHAR(20),
  description VARCHAR(200),
  register_date DATE NOT NULL,
  update_date DATE NOT NULL
);

DROP TABLE IF EXISTS dream;

CREATE TABLE dream (
  dream_id SERIAL,
  board_id SERIAL REFERENCES board(board_id) ON DELETE CASCADE,
  dream_name VARCHAR(100) NOT NULL,
  description VARCHAR(1000),
  plan_date DATE NOT NULL,
  currency char(1) NOT NULL,
  estimate_cost float8,
  image_path VARCHAR(500),
  importance_size SMALLINT NOT NULL,
  achieve_yn char(1) NOT NULL,
  display_yn char(1) NOT NULL,
  register_date DATE NOT NULL,
  update_date DATE NOT NULL,
  PRIMARY KEY (dream_id, board_id)
);
