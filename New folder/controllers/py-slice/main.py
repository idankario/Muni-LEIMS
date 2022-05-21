from PIL import Image
import PIL
from itertools import product
import os
import sys
import pathlib
import shutil


# Usage python main.py <infile> <outfolder>

def tile(filename, out_folder, d):
    name, ext = filename.stem, filename.suffix
    img = Image.open(filename)
    w, h = img.size

    grid = product(range(0, h-h % d, d), range(0, w-w % d, d))
    for i, j in grid:
        box = (j, i, j+d, i+d)
        out = out_folder / f'{name}_{i}_{j}{ext}'
        print(out, flush=True)
        img.crop(box).save(out)


def recreate_folder(f):
    if os.path.isdir(f):
        shutil.rmtree(f)
    os.mkdir(f)


def recreate_folder(f):
    if os.path.isdir(f):
        shutil.rmtree(f)
    os.mkdir(f)


def main():
    infile = pathlib.Path(sys.argv[1])
    outfolder = pathlib.Path(sys.argv[2])
    PIL.Image.MAX_IMAGE_PIXELS = 933120000
    recreate_folder(outfolder)

    try:
        tile(infile, outfolder, 400)
        infile.unlink(missing_ok=True)
    except Exception as e:
        print(e, flush=True)
        exit(1)

    try:
        tile(infile, outfolder, 400)
        infile.unlink(missing_ok=True)
    except Exception as e:
        print(e, flush=True)
        exit(1)


if __name__ == '__main__':
    main()
