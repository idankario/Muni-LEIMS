# -*- coding: utf-8 -*-


# Commented out IPython magic to ensure Python compatibility.
from IPython.display import Image, display
import glob
from google.colab import files
from IPython.core.magic import register_line_cell_magic
import yaml
import wandb
!git clone https: // github.com/ultralytics/yolov5  # clone
# %cd yolov5
# %pip install -qr requirements.txt  # install
# !unzip /content/yolov25.zip
# %cd yolov25
# import torch from yolov5 import utils
# display = utils.notebook_init()  # checks


# Commented out IPython magic to ensure Python compatibility.
# Tensorboard  (optional)
# %load_ext tensorboard
# %tensorboard --logdir runs/train

# Weights & Biases  (optional)
# %pip install -q wandb
# import wandb
# wandb.login(116449df7db9a390b41283e94114c95a7af9a164)
!pip install wandb
!wandb login

!wandb enabled


#


# define number of classes based on YAML
with open(dataset.location + "/data.yaml", 'r') as stream:
    num_classes = str(yaml.safe_load(stream)['nc'])

# Commented out IPython magic to ensure Python compatibility.
# this is the model configuration we will use for our tutorial
# %cat /content/yolov5/models/yolov5x.yaml

# customize iPython writefile so we can write variables


@register_line_cell_magic
def writetemplate(line, cell):
    with open(line, 'w') as f:
        f.write(cell.format(**globals()))


# Commented out IPython magic to ensure Python compatibility.
% % writetemplate / content/yolov5/models/custom_yolov5x.yaml

parameters
nc: {num_classes}  # number of classes
depth_multiple: 0.33  # model depth multiple
width_multiple: 0.50  # layer channel multiple

# anchors
anchors:
    - [10, 13, 16, 30, 33, 23]  # P3/8
    - [30, 61, 62, 45, 59, 119]  # P4/16
    - [116, 90, 156, 198, 373, 326]  # P5/32

# YOLOv5 backbone
backbone:
    # [from, number, module, args]
    [[-1, 1, Focus, [64, 3]],  # 0-P1/2
     [-1, 1, Conv, [128, 3, 2]],  # 1-P2/4
     [-1, 3, BottleneckCSP, [128]],
     [-1, 1, Conv, [256, 3, 2]],  # 3-P3/8
     [-1, 9, BottleneckCSP, [256]],
     [-1, 1, Conv, [512, 3, 2]],  # 5-P4/16
     [-1, 9, BottleneckCSP, [512]],
     [-1, 1, Conv, [1024, 3, 2]],  # 7-P5/32
     [-1, 1, SPP, [1024, [5, 9, 13]]],
     [-1, 3, BottleneckCSP, [1024, False]],  # 9
     ]

# YOLOv5 head
head:
    [[-1, 1, Conv, [512, 1, 1]],
     [-1, 1, nn.Upsample, [None, 2, 'nearest']],
     [[-1, 6], 1, Concat, [1]],  # cat backbone P4
     [-1, 3, BottleneckCSP, [512, False]],  # 13

     [-1, 1, Conv, [256, 1, 1]],
     [-1, 1, nn.Upsample, [None, 2, 'nearest']],
     [[-1, 4], 1, Concat, [1]],  # cat backbone P3
     [-1, 3, BottleneckCSP, [256, False]],  # 17 (P3/8-small)

     [-1, 1, Conv, [256, 3, 2]],
     [[-1, 14], 1, Concat, [1]],  # cat head P4
     [-1, 3, BottleneckCSP, [512, False]],  # 20 (P4/16-medium)

     [-1, 1, Conv, [512, 3, 2]],
     [[-1, 10], 1, Concat, [1]],  # cat head P5
     [-1, 3, BottleneckCSP, [1024, False]],  # 23 (P5/32-large)

     [[17, 20, 23], 1, Detect, [nc, anchors]],  # Detect(P3, P4, P5)
     ]

# Commented out IPython magic to ensure Python compatibility.
# # train yolov5s on custom data for 100 epochs
# # time its performance
# %%time
# %cd /content/yolov5/
!python train.py - -batch 64 - -epochs 1500 - -data {dataset.location}/data.yaml - -cfg ./models/custom_yolov5x.yaml - -hyp / content/yolov5/data/hyps/hyp.scratch-high.yaml - -weights / content/best.pt - -name yolov5x_results - -cache - -evolve
