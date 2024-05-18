-- unlocking uuid
CREATE EXTENSION "uuid-ossp";

-- creating table
CREATE TABLE assets (
    id UUID PRIMARY KEY DEFAULT public.uuid_generate_v4(),
    asset_code integer,
    description text,
    status_code integer
)


-- inserting default data for test
INSERT INTO assets (asset_code, description, status_code) VALUES
  (036410, 'MONITOR DELL "24', 1),
  (036411, 'NOTEBOOK LATITUDE 7420', 1),
  (036412, 'NOTEBOOK LATITUDE 6652', 1),
  (036413, 'CADEIRA CHAIR KING', 1),
  (036414, 'MESA L DESK UPTO', 1);
