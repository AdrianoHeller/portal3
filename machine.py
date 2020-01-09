import csv 
import json
import datetime
import time
import os
import pandas as pd 
import numpy as np  
import sklearn


class Cliente():
    def __init__(self,nome,dependente,machine):
        self.nome = nome
        self.dependente = dependente
        self.machine = machine

    def __str__(self):
        return(f'''Novo cliente:{self.nome},{self.dependente} criado.
               Dados do host: {self.machine}''')    
    
    def getMachineData(self):
        data = list(os.cpu_count(),os.environ())
        return data   

    def cookieData(self,cookieData):
        validData = False
        clusterizedClient = []
        getCookies = cookieData
        for data in getCookies:
            if 'ip' in data:
                validData = True
                clusterizedClient.append(data)
        return clusterizedClient

    # def mapJourney(self):
    
