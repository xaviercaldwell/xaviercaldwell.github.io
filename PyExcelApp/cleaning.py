import pandas as pd
import numpy as np
from openpyxl.workbook import Workbook

df = pd.read_csv('Names.csv', header=None)
df.columns = ['First', 'Last', 'Address', 'City', 'State', 'Area Code', 'Income']

df.drop(columns='Address', inplace=True)

df = df.set_index('Area Code')

new = df.First.str.split(expand=True)

print(new)

df.First = new[0]

df = df.replace('kooper', 'N/A', regex=True)

to_excel = df.to_excel('modified.xlsx')

print(df)

