from PIL import Image
import PIL
from itertools import product
import os
import sys
import pathlib
import shutil

# Usage python main.py <infile> <outfolder>
infile = pathlib.Path(sys.argv[1])
outfolder = pathlib.Path(sys.argv[2])
PIL.Image.MAX_IMAGE_PIXELS = 933120000




def tile(filename, out_folder, d):
    name, ext = filename.stem, filename.suffix
    img = Image.open(filename)
    w, h = img.size
    
    grid = product(range(0, h-h%d, d), range(0, w-w%d, d))
    for i, j in grid:
        box = (j, i, j+d, i+d)
        out = out_folder / f'{name}_{i}_{j}{ext}'
        print(out)
        img.crop(box).save(out)


if os.path.isdir(outfolder):
    shutil.rmtree(outfolder)
os.mkdir(outfolder)


try:
    tile(infile, outfolder, 400)
    infile.unlink(missing_ok=True)
    exit(0)
except Exception as e:
    print(e)
    exit(1)