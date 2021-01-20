import os
import csv

ncaab_csv = os.path.join("2019_season.csv")

with open(ncaab_csv) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")

    csv_header = next(csv_file)
    csv_header_two = next(csv_file)
    
    wins = losses = 0
    iterator = -1

    team_names = []
    wins = []
    losses = []
    win_percentage = []

    for row in csv_reader:
        iterator = iterator + 1
        team_names.append(row[1])
        wins.append(float(row[3]))
        losses.append(float(row[4]))
        win_percentage.append((float(row[3])/float(row[4]))*100)
        print(team_names[iterator])
        print(win_percentage[iterator])