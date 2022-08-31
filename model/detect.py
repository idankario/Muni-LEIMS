import torch

# Model
# or yolov5n - yolov5x6, custom
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Images
# or file, Path, PIL, OpenCV, numpy, list
img = 'https://ultralytics.com/images/zidane.jpg'

# Inference
results = model(img)

# Results
results.print()  # or .show(), .save(), .crop(), .pandas(), etc.
