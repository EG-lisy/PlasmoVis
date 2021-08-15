<br><br>
<img style="float: center;" src="PV_pics/plasmoVis_logo.png" width="550"> </img>

PlasmoVis is a  user-friendly web-based visualisation tool to assist with the analysis and visualisation of sequencing data, specifically to interrogate the genomic variation of P. malariae parasites. 

## Table of Contents
> - [About](#About)<br>
> - [Prerequisites](#Prerequisites)<br>
> - [Download PlasmoVis](#download-plasmovis) <br>
> - [Install PlasmoVis Dependendencies](#installing-plasmovis-dependencies) <br>
> - [Run PlasmoVis](#run-plasmovis)<br>
> - [Author](#Author)<br>

# Prerequisites
PlasmoVis is is compatible for being run either on Mac or Windows Operating Systems.<br>
Please ensure you have <b>Node.js</b> installed on your computer before proceeding.

- [Node.js](https://nodejs.org/it/download/ "Node.js")

# Download PlasmoVis

Download PlasmoVis in one of the following ways:

1. Click on the green `Code` button on the upper-right corner above and select `Download ZIP` (Figure 1)

<p align="center"><img src="PV_pics/download_repo.png" width="400"></img></p><br><b>Figure 1.</b> Download PlasmoVis<br><br>


2. In case you have [Git](https://git-scm.com/downloads "Install Git") installed on your computer, run the following commands on your Terminal

```sh
# set your working directory (i.e. folder in which you would like to save PlasmoVis)
cd mydir/myfolder
# clone the repository
git clone https://github.com/EG-lisy/PlasmoVis.git
```

# Install PlasmoVis Dependencies

Once you have downloaded the project, proceede installing PlasmoVis dependencies (i.e. node modules).

1. Open your Terminal and set your working directory inside `PlasmoVis/PlasmoVis`. Please note that the project subfolder has the same name of the main one.

```sh
# set your working directory (i.e. folder in which you would like to save PlasmoVis)
cd myworkingdirectory/PlasmoVis/PlasmoVis
# install dependencies
npm run
```

Once the installation is completed, a `node_modules` folder will be created inside `PlasmoVis/PlasmoVis` folder, containing all the required dependencies needed to run PlasmoVis.

# Run PlasmoVis

1. Without changing the working directory, run the following command from the Terminal:

```sh
node app.js
```

2. If all the steps have been followed correclty, the following welcoming message will be displayed on your Command Line:

```console
(base) MacBook-Pro-di-Elisabetta:PlasmoVis lisy$ node app.js
Server is listening on port: 3000
-------------------------------- PlasmoVis --------------------------------
Welcome to PlasmoVis!
1. Open your browser of choice
2. Visit: http://localhost:3000
```






# Sequencing Files
## THIS SECTION MIGHT NOT BE NEEDED
Download the sequencing files running the following command



![preview](PV_pics/preview.png)

## Responsive view
If the user is using a smaller screen, the menu will adapt accordingly
![responsive](PV_pics/responsive.png)

# Prerequisites
Prerequisites<br>

- [One](https://www.rstudio.com/products/rstudio/download/ "RStudio") (free version) <br>
- [Two](https://cran.r-project.org "R") 

BSAvis package requires merged Variant Calling Format (`VCF`) files as input files, generated using `GATK4`.<br> 

- [Alignment Steps](https://github.com/FadyMohareb/BSAvis_GP_2020/blob/main/QC_Alignment_VC/alignment_variantCalling/steps/alignment_steps.txt "Alignment Steps")
- [Variant Calling Steps](https://github.com/FadyMohareb/BSAvis_GP_2020/blob/main/QC_Alignment_VC/alignment_variantCalling/steps/variantCalling_steps.txt "Variant Calling Steps")


* `test.vcf` 


```R
# script
```

# Author
```
Developed by Elisabetta Galatola

Applied Bioinformatics MSc
Cranfield University - Cranfield, Bedford, UK
Academic Year: 2020-2021
```