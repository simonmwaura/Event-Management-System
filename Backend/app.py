from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from models import db,Category,Event,EventTicket,Registration,Ticket,User



def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'

    db.init_app(app)

    

    with app.app_context():
      db.create_all()
    
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)