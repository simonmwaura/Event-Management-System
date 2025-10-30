from App import db
from datetime import datetime

class Ticket(db.Model):
    __tablename__= "ticket"

    Tickets_ID = db.Column(db.Integer,primary_key=True)
    Event_ID = db.Column(db.Integer,db.ForeignKey("event.Event_ID"),nullable=False) 
    User_ID = db.Column(db.Integer,db.ForeignKey("user.User_ID"),nullable=False)
    Ticket_Number = db.Column(db.String(100),unique=True,nullable=False) 
    Purchase_Date = db.Column(db.TIMESTAMP,nullable=False , default=datetime.now)
    Price_Paid = db.Column(db.Decimal(10,2),nullable=False , default=0.00)

    