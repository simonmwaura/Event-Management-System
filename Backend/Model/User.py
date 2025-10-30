from App import db
from datetime import datetime

class User (db.Model):
    __tablename__ ="user"

    User_ID = db.Column(db.Integer,primary_key=True)
    Full_Name=db.Column(db.String(100),nullable=False)
    Email_Address=db.Column(db.String(100),unique=True,nullable=False)
    Phone_Number=db.Column(db.String(13),unique=True,nullable=False)
    Password=db.Column(db.String(150),nullable=False)
    Account_Role=db.Column(db.Enum('Administrator','Organizer','Attendee'),default="Attendee",nullable=False)
    Created_AT=db.Column(db.TIMESTAMP,nullable=False,default= datetime.now)
    Updated_AT=db.Column(db.TIMESTAMP,nullable=False,default= datetime.now ,onupdate=datetime.now)
    