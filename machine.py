import csv 
import json
import datetime
import os
import pandas as pd 
import numpy as np  
import sklearn
import sqlite3

conn = sqlite3.connect('dataMachine.db')

dbCursor = conn.cursor()

class Cliente():
    def __init__(self,nome,dependente,machine,action):
        self.nome = nome
        self.dependente = dependente
        self.machine = machine        
        self.action = action

    def __str__(self):
        return(f'''Novo cliente:{self.nome},{self.dependente} criado.Dados do host: {self.action}''')    
    
    def cookieData(self,cookieData):
        validData = False
        clusterizedClient = []
        getCookies = cookieData
        for data in getCookies:
            if 'ip' in data:
                validData = True
                clusterizedClient.append(data)
        return clusterizedClient

def getMachineData():
        data = (os.cpu_count(),os.uname())
        return data  

def validateUser():
    logTime = datetime.datetime.now()
    sysData = os.uname()
    with open('./fileData.txt','r') as fData:
        readData = fData.readlines()          
        if fData.write():
            one = fData.writelines(logTime)
            two = fData.writelines(sysData)
            inputData = [one,two]  
    return inputData        

def formatData():
    query = '''CREATE TABLE IF NOT EXISTS newUser(id INTEGER PRIMARY KEY AUTOINCREMENT
    NOT NULL, name VARCHAR(60), dependent VARCHAR(60), machine VARCHAR(300),action VARCHAR(300))'''
    dbCursor.execute(query)
    conn.commit()
 
def insertData(data):    
    insert = '''INSERT INTO newUser(name,dependent,machine,action)VALUES()''',(data[0],data[1],getMachineData(),validateUser())
    dbCursor.execute(insert)
    conn.commit()    

def queryData():    
    select = '''SELECT name,action FROM newUser'''
    dbCursor.execute(select)
    conn.commit()

def main():
    dadosCliente = ['Andre de Barros Silva','Angela de Barros']
    novoCliente = Cliente(dadosCliente[0],dadosCliente[1],getMachineData(),queryData())
    formatData()    
    insertData(dadosCliente)
    queryData()

if __name__ == "__main__":
    main()    


                    
