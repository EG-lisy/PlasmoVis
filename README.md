<br><br>
<img style="float: center;" src="PV_pics/plasmoVis_logo.png" width="550"> </img>

PlasmoVis is a  user-friendly web-based visualisation tool to assist with the analysis and visualisation of sequencing data, specifically to interrogate the genomic variation of P. malariae parasites. 

## Table of Contents
> - [About](#About)<br>
> - [Prerequisites](#Prerequisites)<br>
> - [Setup](#setup)<br>
>   - [Download PlasmoVis](#1-download-plasmovis) <br>
>   - [Install PlasmoVis Dependendencies](#2-install-plasmovis-dependencies) <br>
>   - [Run PlasmoVis](#3-run-plasmovis)<br>
>   - [Close PlasmoVis](#4-close-plasmovis)<br>
> - [PlasmoVis](#PlasmoVis)<br>
>   - [Home Page](#home-page)<br>
>   - [Author](#Author)<br>

# Prerequisites
PlasmoVis is is compatible for being run either on Mac or Windows Operating Systems.<br>
Please ensure you have <b>Node.js</b> installed on your computer before proceeding.

- [Node.js](https://nodejs.org/it/download/ "Node.js")
# Setup
## 1. Download PlasmoVis

PlasmoVis can be downloaded in two ways:

1. Click on the green `Code` button on the upper-right corner above and select `Download ZIP` <b>(Figure 1)
</b>.

<p align="center"><img src="PV_pics/download_repo.png" width="400"></img></p><br><b>Figure 1.</b> Download PlasmoVis - GitHub screenshot.<br><br>

2. In case you have [Git](https://git-scm.com/downloads "Install Git") installed on your computer, run the following commands on your terminal:

```sh
# set your working directory (i.e. folder in which you would like to save PlasmoVis)
cd <yourdir/yourfolder>
# clone the repository
git clone https://github.com/EG-lisy/PlasmoVis.git
```

## 2. Install PlasmoVis Dependencies

Proceede installing PlasmoVis dependencies (i.e. node modules).

1. From the terminal, set your working directory inside `PlasmoVis/PlasmoVis`. Please note that the project subfolder has the same name of the main one.

```sh
# set your working directory (i.e. folder in which you would like to save PlasmoVis)
cd <yourworkingdirectory>/PlasmoVis/PlasmoVis
# install dependencies
npm install
```

Once the installation is completed, a `node_modules` folder containing all the required dependencies will be created inside `PlasmoVis/PlasmoVis`.

## 3. Run PlasmoVis

1. Without changing the working directory, run the following command from the terminal:

```sh
node app.js
```

2. If all the steps have been followed correclty, the following welcoming message will be displayed on your Console:

```console
(base) MacBook-Pro-di-Elisabetta:PlasmoVis lisy$ node app.js

Server is listening on port: 3000
-------------------------------- PlasmoVis --------------------------------
Welcome to PlasmoVis!
1. Open your browser of choice
2. Visit: http://localhost:3000
```

3. You will be now able to visit PlasmoVis on [http://localhost:3000](http://localhost:3000 "PlasmoVis").


## 4. Close PlasmoVis

To stop PlasmoVis from running, type `Ctrl+C` on your terminal.


# PlasmoVis

This section aims to assist with the navigation of PlasmoVis web-pages.

## Home Page

From [http://localhost:3000](http://localhost:3000 "PlasmoVis") you will end up on the landing page of PlasmoVis <b>(Figure 2)</b>.


![PlasmoVis - Home Page](PV_pics/homepage.png)<br><b>Figure 2.</b> PlasmoVis Landing Page. Pic downloaded from [FreePik](https://www.freepik.com/free-photo/close-up-mosquito-sucking-blood_4283015.htm#page=1&query=mosquito&position=41)<br>

Below the welcoming message, self-explanatory hooverable links are also included <b>(Figure 3)</b>.

![PlasmoVis - Bottom home Page](PV_pics/homepage_bottom.png)<br><b>Figure 3.</b> PlasmoVis bottom-section navigation links.<br>


<br><i>P. malariae</i> variants can be inspected either by clicking on the green `Run PlasmoVis` button (refer to <b>Figure 2</b>) or by using the navigation bar (read below).<br>

## Navigation bar

The navigation bar on the upper-section allows switching in between pages <b>(Figure 4)</b>.<br><br>

<p align="center"><img src="PV_pics/navbar.png"></img></p><b>Figure 4.</b>PlasmoVis Navigation Bar<br><br><br>

Where: 
1. <b>PlasmoVis logo</b> takes back to the [home page](#home-page)
2. <b>GENOME BROWSER</b> allows to inspect <i>P. malariae</i> variants over a IGV.js framework
3. <b>DATA</b> allows to inspect sample information in the form of a world map, charts and tables
4. <b>ABOUT</b> includes additional information on <i>P. knowlesi</i> data used whilst developing PlasmoVis
5. <b>HOME</b> takes back to [home page](#home-page)


## Genome Browser


# Sequencing Files
## THIS SECTION MIGHT NOT BE NEEDED
Download the sequencing files running the following command



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