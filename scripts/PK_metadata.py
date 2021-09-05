#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 14 11:46:15 2021

Script to parse the metadata of P. knowlesi, create a SQLite database and table
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
file = csv.reader(open("Metadata_141.tsv", "r"), delimiter="\t")

# lists
columns = []
samples = []
location = [] 
group_pca = [] 



for row in file:
    columns.append(row)
    
# remove header
no_header = columns[1:]

# samples
for sample in no_header:
    samples.append(sample[0])
# location
for loc in no_header:
    location.append(loc[1])
# pca
for group in no_header:
    group_pca.append(group[2])
    


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


###                        CREATE TABLES               ###   
                     
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
    sql = ''' INSERT INTO metadata(sample_id,location,group_pca)
              VALUES(?,?,?) '''
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
    database = "test2.sqlite" 


    sql_create_metadata_table = """ CREATE TABLE IF NOT EXISTS metadata (
                                        sample_id TEXT NOT NULL,
                                        location TEXT NOT NULL,
                                        group_pca TEXT NOT NULL,
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
            metadata = (samples[i], location[i], group_pca[i])
            create_metadata(conn, metadata)
                      

if __name__ == '__main__':
    main()
