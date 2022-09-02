import torch

model = torch.hub.load('ultralytics/yolov5', 'yolov5s',
                       pretrained=True, device='cpu')  # for PIL/cv2/np inputs and NMS
model.conf = 0.25  # NMS confidence threshold
iou = 0.45  # NMS IoU threshold
agnostic = False  # NMS class-agnostic
multi_label = False  # NMS multiple labels per box
# (optional list) filter by class, i.e. = [0, 15, 16] for COCO persons, cats and dogs
# classes = None
max_det = 1000  # maximum number of detections per image
amp = False  # Automatic Mixed Precision (AMP) inference

img = 'https://ultralytics.com/images/zidane.jpg'

# Inference
results = model(img)
results.save()
print(results.pandas().xyxy[0])
