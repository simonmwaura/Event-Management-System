from App import db
from datetime import datetime

class Event(db.Model):
    __tablename__ = "event"

    Event_ID = db.Column(db.Integer,primary_key=True)
    User_ID = db.Column(db.Integer,db.ForeignKey("user.User_ID"),nullable=False)
    Category_ID = db.Column(db.Integer,db.ForeignKey("category.Category_ID"),nullable=False)
    Title = db.Column(db.String(100),unique=True,nullable=False)
    Description = db.Column(db.Text,nullable=False)
    Date_Time = db.Column(db.TIMESTAMP,nullable=False)
    End_Date_Time = db.Column(db.TIMESTAMP,nullable=False)
    Location = db.Column(db.String(100),nullable=False)
    Venue = db.Column(db.String(100),nullable=False)
    Total_Tickets = db.Column(db.Integer,nullable=False,default=0)
    Tickets_Sold = db.Column(db.Integer,nullable=False,default=0)
    Available_Tickets = db.Column(db.Integer,nullable=False,default=0)
    Max_Tickets_Per_User = db.Column(db.Integer, default=10)
    Price = db.Column(db.Decimal(10,2),nullable=False,default=0.00)
    Image = db.Column(db.String(500),nullable=True)
    Event_Status = db.Column(db.Enum("Draft","Published","Cancelled","Completed","Sold Out"), default="Draft", nullable=False)
    Event_Type = db.Column(db.Enum("In Person", "Virtual", "Hybrid"), default="In Person")
    Virtual_Event_Link = db.Column(db.String(500), nullable=True)
    Created_AT = db.Column(db.TIMESTAMP,default=datetime.now,nullable=False)
    Updated_AT = db.Column(db.TIMESTAMP,default=datetime.now,nullable=False,onupdate=datetime.now)
    Registration_Deadline = db.Column(db.TIMESTAMP, nullable=True)