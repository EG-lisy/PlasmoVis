<br><br>
<img style="float: center;" src="PV_pics/plasmoVis_logo.png" width="550"> </img>

PlasmoVis is a  user-friendly web-based visualisation tool to assist with the analysis and visualisation of sequencing data, specifically to interrogate the genomic variation of P. malariae parasites. 

## Table of Contents
> - [About](#About)<br>
> - [Prerequisites](#Prerequisites)<br>
> - [Download PlasmoVis](#Preview) <br>
> - [Prerequisites](#Prerequisites)<br>
> - [Author](#Author)<br>

# Prerequisites
PlasmoVis is is compatible for being run either on Mac or Windows Operating Systems.<br>
Please ensure you have <b>Node.js</b> installed on your computer before proceeding.

- [Node.js](https://nodejs.org/it/download/ "Node.js")

# Download PlasmoVis

Download PlasmoVis in one of the following ways:

1. Click on the green `Code` button above and select `Download ZIP` (Figure 1)

![fig1](PV_pics/download_repo.png)<br><b>Figure 1.</b> Download PlasmoVis<br>


2. In case you have [Git](https://git-scm.com/downloads "Install Git") installed on your computer, run the following commands on your Terminal

```R
# set your working directory (i.e. folder in which you would like to save PlasmoVis)
cd <your working directory>
git clone https://github.com/EG-lisy/PlasmoVis.git
```

# Preview
Complete web page view<br>
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