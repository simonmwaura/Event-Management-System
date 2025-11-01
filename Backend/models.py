from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from datetime import datetime

db=SQLAlchemy()

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
    
    # Relationships
    # A User can organize many Events
    organized_events = relationship('Event', back_populates='organizer', foreign_keys='Event.User_ID')
    
    # A User can have many Registrations
    registrations = relationship('Registration', back_populates='user', foreign_keys='Registration.User_ID')
    
    # A User can have many Tickets (as attendee)
    tickets = relationship('Ticket', back_populates='attendee', foreign_keys='Ticket.User_ID')
    

class Ticket(db.Model):
    __tablename__= "ticket"

    Tickets_ID = db.Column(db.Integer,primary_key=True)
    Event_ID = db.Column(db.Integer,db.ForeignKey("event.Event_ID"),nullable=False) 
    User_ID = db.Column(db.Integer,db.ForeignKey("user.User_ID"),nullable=False)
    Ticket_Number = db.Column(db.String(100),unique=True,nullable=False) 
    Purchase_Date = db.Column(db.TIMESTAMP,nullable=False , default=datetime.now)
    Price_Paid = db.Column(db.Decimal(10,2),nullable=False , default=0.00)

    #Relationships
    # A SINGLE Ticket can be sold in a SINGLE Event
    event = relationship("Event",back_populates="ticket",foreign_keys=[Event_ID])
    #A SINGLE Ticket can be bought by a SINGLE User
    user = relationship("User",back_populates="ticket",foreign_keys=[User_ID])



class Registration(db.Model):
    __tablename__ = "registration"
    
    Registrations_ID = db.Column(db.Integer,primary_key=True)
    Event_ID = db.Column(db.Integer,db.ForeignKey("event.Event_ID"),nullable=False)
    User_ID = db.Column(db.Integer,db.ForeignKey("user.User_ID") ,nullable=False)
    Registration_Date = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now)
    Registration_Status = db.Column(db.Enum("Registered","Cancelled"),default="Cancelled",nullable=False)
    Updated_AT=db.Column(db.TIMESTAMP,nullable=False,default=datetime.now , onupdate=datetime.now)

    #Relationships
    # A SINGLE Event will have MANY Registrations
    event = relationship("Event",back_populates="event",foreign_keys=[Event_ID])
    # A SINGLE User can have MANY Registrations
    user = relationship("Registration",back_populates="user",foreign_keys=[User_ID])



class EventTicket(db.Model):
    __tablename__="event_ticket"
   
    EventTicket_ID = db.Column(db.Integer,primary_key=True)
    Event_ID = db.Column(db.Integer,db.ForeignKey('event.Event_ID'),nullable=False)
    Total_Tickets = db.Column(db.Integer,nullable=False,default=0)
    Tickets_Sold = db.Column(db.Integer,nullable=False,default=0)
    Available_Tickets = db.Column(db.Integer,nullable=False,default=0)
    Max_Tickets_Per_User = db.Column(db.Integer, default=10)
    Price = db.Column(db.Decimal(10,2),nullable=False,default=0.00)
    Registration_Deadline = db.Column(db.TIMESTAMP, nullable=True)

    #Relationships
    #A SINGLE event has a SINGLE event ticket
    event = relationship("Event",back_populates="event_ticket",foreign_keys=[Event_ID])


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
    Image = db.Column(db.String(500),nullable=True)
    Event_Status = db.Column(db.Enum("Draft","Published","Cancelled","Completed","Sold Out"), default="Draft", nullable=False)
    Event_Type = db.Column(db.Enum("In Person", "Virtual", "Hybrid"), default="In Person")
    Virtual_Event_Link = db.Column(db.String(500), nullable=True)
    Created_AT = db.Column(db.TIMESTAMP,default=datetime.now,nullable=False)
    Updated_AT = db.Column(db.TIMESTAMP,default=datetime.now,nullable=False,onupdate=datetime.now)
    
    # Relationships
    # A SINGLE Event has a SINGLE User(Organizer)
    event = relationship('User',back_populates="",foreign_keys=[User_ID])

    # A SINGLE Event has a SINGLE Category
    category = relationship('Category',back_populates="event",foreign_keys=[Category_ID])

    # A SINGLE Event has a SINGLE EventTicket
    event_ticket = relationship("EventTicket",back_populates="event",foreign_keys="event_ticket.Event_ID")

    #A SINGLE Event has MANY Tickets
    ticket = relationship("Ticket",back_populates="event",foreign_keys="ticket.Event_ID")

    #A SINGLE Event has MANY Registrations
    registration=relationship("Registration",back_populates="event",foreign_keys="registration.Event_ID")


class Category(db.Model):
    __tablename__ = "category"
    
    Category_ID = db.Column(db.Integer,primary_key=True)
    Name = db.Column(db.String(100),nullable=False, unique=True)
    Description = db.Column(db.Text,nullable=False)
    Created_At = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now)
    Updated_At = db.Column(db.TIMESTAMP,nullable=False,default=datetime.now , onupdate=datetime.now)

    #Relationship
    # A SINGLE category can have MANY events
    events = relationship('Event',back_populates='category',foreign_keys='event.Category_ID')    