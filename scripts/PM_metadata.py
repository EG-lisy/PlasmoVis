#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug  9 17:42:58 2021

Script to parse the metadata of P. malariae, create a SQLite database and table
to be populated with the data


@author: lisy
"""

import sqlite3 # to generate the database tables
from sqlite3 import Error
import csv
import os 

# changes the current working directory to the given path
os.chdir('/Users/lisy/Desktop/Cranfield/Thesis/data')

# read file
file = csv.reader(open("Metadata_Pmalariae.csv", "r"), delimiter=",")

# lists
columns = []
samples = []
countries = [] 
continents = [] 
years = []

for row in file:
    columns.append(row)

# remove header
no_header = columns[1:]

# append info
# sample
for sample in no_header:
    samples.append(sample[1])
# country
for country in no_header:
    countries.append(country[2])
# continent
for continent in no_header:
    continents.append(continent[3])
# year
for year in no_header:
    years.append(year[4])
    

###                        CREATE SQLITE CONNECTION                ###

# REFERENCE: https://www.sqlitetutorial.net/sqlite-python/creating-database/

# database conneciton
def create_connection(db_file):
    """ 
    create a database connection to the SQLite database specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn

    
###                              CREATE TABLE                     ###   
                     
def create_table(conn, create_table_sql):
    """ 
    Create table by specifying the table name (second parameter)
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

# create metadata table
def create_metadata(conn, metadata):
    """
    Create metadata table, inserting values with sql commands
    :param conn:
    :param metadata:
    """
    sql = ''' INSERT INTO metadata(sample_id,country,continent,year)
              VALUES(?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, metadata)
    conn.commit()
    return cur.lastrowid


###                             MAIN FUNCTION                       ###
def main():
    """
    Main function: create all the tables using SQL commands
    
    Note: change the file path, according to where you want to save the file. 
    """
    database = "Pmalariae_metadata.sqlite" 


    sql_create_metadata_table = """ CREATE TABLE IF NOT EXISTS metadata (
                                        sample_id TEXT NOT NULL,
                                        country TEXT NOT NULL,
                                        continent TEXT NOT NULL,
                                        year TEXT NOT NULL,
                                        PRIMARY KEY (sample_id)
                                    ); """

    conn = create_connection(database)
    
    if conn is not None:
    
        #create metadata table
        create_table(conn, sql_create_metadata_table)

    else:
        print("Error! Database connection failed.")   

    with conn:
            
       # populate metadata table
        for i in range(len(samples)):
            metadata = (samples[i], countries[i], continents[i], years[i])
            create_metadata(conn, metadata)
                      

if __name__ == '__main__':
    main()

