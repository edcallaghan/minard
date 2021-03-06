from .db import engine

def get_deck_activity(limit=25, offset=0):
    '''
    Return a dictionary of deck activity information
    '''
    conn = engine.connect()

    '''
    Direction = 0, Off. Direction = 1, On. Direction = 2, Clearing.
    Location = 0, Deck. Location = 1, DCR.
    '''
    result = conn.execute("SELECT run, timestamp, direction, location, " 
                          "disruptive, name, comment FROM deck_activity "
                          "ORDER BY timestamp DESC LIMIT %s OFFSET %s", \
                          (limit,offset))

    if result is None:
        return None

    keys = result.keys()
    rows = result.fetchall()

    return [dict(zip(keys, row)) for row in rows]

