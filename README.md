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
>   - [Genomic Variant Browser]()<br>
>   - [Data]()<br>
>   - [About - P. knowlesi]()<br>
> - [Author](#Author)<br>

# Prerequisites
PlasmoVis is is compatible for being run either on Mac or Windows Operating Systems.<br>
Please ensure you have <b>Node.js</b> installed on your computer before proceeding.

- [Node.js](https://nodejs.org/it/download/ "Node.js")
# Setup
## 1. Download PlasmoVis

PlasmoVis can be downloaded in two ways:

1. Click on the green `Code` button on the upper-right corner above and select `Download ZIP` <b>(Figure 1)
</b>. Remember to unzip the file before proceeding.

<p align="center"><img src="PV_pics/download_repo.png" width="400"></img></p><br><b>Figure 1.</b> Download PlasmoVis - GitHub screenshot.<br><br>

2. Alternatively, in case you have [Git](https://git-scm.com/downloads "Install Git") installed on your computer, run the following commands on your terminal:

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

### Note for Developers

> Nodemon has been installed to allow changes being automatically updated on the server.<br> If you wish to edit the code and run PlasmoVis in the developer mode, run `npm start` instead.

2. If all the steps have been followed correclty, the following welcoming message will be displayed on your Console:

```console
MacBook-Pro-di-Elisabetta:PlasmoVis lisy$ node app.js

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


![PlasmoVis - Home Page](PV_pics/homepage.png)<br><b>Figure 2.</b> PlasmoVis Landing Page.<br>

Below the welcoming message, self-explanatory hooverable links are also included <b>(Figure 3)</b>.

![PlasmoVis - Bottom home Page](PV_pics/homepage_bottom.png)<br><b>Figure 3.</b> PlasmoVis bottom-section navigation links.<br>


<br><i>P. malariae</i> variants can be inspected either by clicking on the green `Run PlasmoVis` button (refer to <b>Figure 2</b>) or by using the navigation bar (read below).<br>

## Navigation bar

The navigation bar on the upper-section allows switching in between pages <b>(Figure 4)</b>.<br><br>

<p align="center"><img src="PV_pics/navbar.png"></img></p><b>Figure 4.</b>PlasmoVis Navigation Bar<br><br><br>

Where: 
1. <b>PlasmoVis logo</b> takes back to the [home page](#home-page)
2. <b>GENOME BROWSER</b> takes to the [Genomic Variant Browser](#genomic-variant-browser) page allows to inspect <i>P. malariae</i> variants over a IGV.js framework
3. <b>DATA</b> allows to inspect sample information in the form of a world map, charts and tables
4. <b>ABOUT</b> includes additional information on <i>P. knowlesi</i> data used whilst developing PlasmoVis
5. <b>HOME</b> takes back to [home page](#home-page)


## Genomic Variant Browser

This page allows to inspect <i>P. malariae</i> variants over an `IGV.js` framework<b>(Figure 5)</b>.

<p align="center"><img src="PV_pics/igv.png"></img></p><b>Figure 5.</b>Screenshot example of the Genomic Variant Browser<br><br>

Where:
1. Plasmodium Malariae Genome (`PmUG01`)
2. Annotation - gene IDs
3. Intersected samples variants based on continent of origin (Africa, Americas and Asia)
4. SNPs (Single Nucleotide Polymorphisms). 

Genome, annotation and variants tracks are all interactive.

By clicking on a specific gene track, an info box pops up displaying the gene ID/parent ID, which can be copyied to your clipboard to identify the gene name using the gene table (see [Gene Table]() section). 

SNPs tracks display two subtracks. The upper subtrack is coloured by continent; by clicking on it, an info box pops up displaying all the informaiton stored inside the VCF file. Likewise, the lower subtrack pops up an info box displaying genotype information.

 <b>(Figure 6)</b>.

<p align="center"><img src="PV_pics/igv_info.png"></img></p><b>Figure 5.</b>Screenshot example of the Genomic Variant Browser<br><br>

Where:
> <b>CHR</b> chromosome name<br>
> <b>Pos</b> SNP position<br>
> <b>Names</b> SNP name added during the annotation pipeline used to calculate fixation indices (R script)<br>
> <b>Ref</b> reference allele<br>
> <b>ALT</b> alternative allele<br>
> <b>Qual</b> a phred-scaled quality score assigned by the variant caller<br>
> <b>Filter</b> PASS if specific position has passed all given filters when generating the vcf file<br>
> <b>AC</b> allele count in genotypes, for each ALT allele, in the same order as listed<br>
> <b>AF</b> allele Frequency, for each ALT allele, in the same order as listed<br>
> <b>AN</b> total number of alleles in called genotypes<br>
> <b>BaseQRankSum</b> z-score from Wilcoxon rank sum test of Alt Vs. Ref base qualities<br>
> <b>DP</b> approximate read depth; some reads may have been filtered<br>
> <b>ExcessHet</b> phred-scaled p-value for exact test of excess heterozygosity<br>
> <b>FS</b> phred-scaled p-value using Fisher's exact test to detect strand bias<br>
> <b>InbreedingCoeff</b> inbreeding coefficient as estimated from the genotype likelihoods per-sample when compared against the Hardy-Weinberg expectation<br>
> <b>MLEAC</b> maximum likelihood expectation (MLE) for the allele counts (not necessarily the same as the AC), for each ALT allele, in the same order as listed<br>
> <b>MLEAF</b> maximum likelihood expectation (MLE) for the allele frequency (not necessarily the same as the AF), for each ALT allele, in the same order as listed<br>
> <b>MQ</b> RMS (root mean square) Mapping Quality<br>
> <b>MQRankSum</b> z-score From Wilcoxon rank sum test of Alt vs. Ref read mapping qualities<br>
> <b>QD</b> variant Confidence/Quality by Depth<br>
> <b>ReadPosRankSum</b> z-score from Wilcoxon rank sum test of Alt vs. Ref read position bias<br>
> <b>SOR</b> symmetric Odds Ratio of 2x2 contingency table to detect strand bias<br>
> <b>VQSLOD</b> log odds of being a true variant versus being false under the trained gaussian mixture model<br>
> <b>culprit</b>  the annotation which was the worst performing in the Gaussian mixture model, explains the reason why the variant was filtered out (e.g. FisherStrand (FS), QualByDepth (QD), StrandOddsRatio (SOR), RMSMappingQuality (MQ), MappingQualityRankSumTest (MQRankSum), ReadPosRankSumTest (ReadPosRankSum)…)<br>
> <b>BCSQ</b> haplotype-aware consequence annotation from BCFtools/csq, see http://samtools.github.io/bcftools/howtos/csq-calling.html for details. Format: Consequence|gene|transcript|biotype|strand|amino_acid_change|dna_change<br>
> <b>Fst</b> Fixaction index (range 0-1)




## Data

## About

## Home


# Sequencing Files
## THIS SECTION MIGHT NOT BE NEEDED
Download the sequencing files running the following command

# Author
```
Developed by Elisabetta Galatola

Applied Bioinformatics MSc
Cranfield University - Cranfield, Bedford, UK
Academic Year: 2020-2021
```