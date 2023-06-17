import csv

def main() -> None:
	# Open database file
	with open('PS_LibreAcces_Personne_activite_202306140847.txt') as file:
		# Get all line as an array
		lines = file.readlines()
		# Open csv file to push data inside
		with open('result.csv', 'w', newline='') as csv_file:
			# Open csv writer
			writer = csv.writer(csv_file)
			# For each lines
			for index, line in enumerate(lines):
				# In first iterate add header
				if index == 1:
					data = ['ID', 'Firstname', 'Lastname', 'Phone number 1', 'Phone number 2', 'Fax', 'Email', 'Activity']
					writer.writerow(data)
				# Check if Kinésithérapeute is inside string
				if 'Kinésithérapeute' in line:
					# Split all data by it's delimiter
					columns = line.split('|')
					data = [
						index, # Iterate
						columns[7], # Firstname
						columns[8], # Lastname
						columns[40], # Phone number 1
						columns[41], # Phone number 2
						columns[42], # Fax
						columns[43], # Email
						columns[10], # Activity just to be sure of what we get
					]
					# Just get data we need
					writer.writerow(data)
					# Print in console new data entered
					print('New Line entered:')
					print(str(columns))

# Run script
if __name__ == '__main__': main()
