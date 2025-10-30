from App import db
from datetime import datetime

class Category(db.Model):
    __tablename__ = "category"
    
    Category_ID = db.Column(db.Integer,primary_key=True)
    Name = db.Column(db.String(100),nullable=False, unique=True)
    Description = db.Column(db.Text,nullable=False)
    Created_At = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now)
    Updated_At = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now , onupdate=datetime.now)