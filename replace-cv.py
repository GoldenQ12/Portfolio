import shutil
from tkinter import Tk, filedialog
import os

def replace_file():
    root = Tk()
    root.withdraw()

    # Select the new file to use as the replacement
    source_file = filedialog.askopenfilename(
        title="Select the replacement file"
    )
    if not source_file:
        print("No file selected.")
        exit()

    # Select the destination file to replace
    destination_file = filedialog.askopenfilename(
        title="Select the file to be replaced"
    )
    if not destination_file:
        print("No destination file selected.")
        exit()

    # Replace the destination file with the new one
    try:
        shutil.copy2(source_file, destination_file)
        print(f"✅ Replaced '{os.path.basename(destination_file)}' with '{os.path.basename(source_file)}'")
    except Exception as e:
        print(f"❌ Error: {e}")
    cv_path = "C:/Users/golde/Downloads/Programming/Github/Portfolio/CvProfessional.pdf"

if __name__ == "__main__":
    replace_file()


