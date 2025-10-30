from App import db
from datetime import datetime

class Registration(db.Model):
    __tablename__ = "registration"
    
    Registrations_ID = db.Column(db.Integer,primary_key=True)
    Event_ID = db.Column(db.Integer,db.ForeignKey("event.Event_ID"),nullable=False)
    User_ID = db.Column(db.Integer,db.ForeignKey("user.User_ID") ,nullable=False)
    Registration_Date = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now)
    Registration_Status = db.Column(db.Enum("Registered","Cancelled"),default="Cancelled",nullable=False)
    Updated_AT=db.Column(db.TIMESTAMP,nullable=False,default=datetime.now , onupdate=datetime.now)


