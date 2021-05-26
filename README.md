<br>
<div style="text-align: center">
<img src="plasmoVis_logo.png" width="600"/>
</div>


img[src*='#left'] {
    float: left;
}
img[src*='#right'] {
    float: right;
}
img[src*='#center'] {
    display: block;
    margin: auto;
}


![my image](plasmoVis_logo.png#left)
![my image](plasmoVis_logo.png#right)
![my image](plasmoVis_logo.png#center)
#

PlasmoVis is a species-specific genomic variant browser specifically developped to inspect Plasmodium malariae variations.

## Table of Contents
> - [Prerequisites](#Prerequisites)<br>
> - [Author](#Author)<br>

# Prerequisites
Prerequisites<br>

- [RStudio](https://www.rstudio.com/products/rstudio/download/ "RStudio") (free version) <br>
- [R](https://cran.r-project.org "R") 

BSAvis package requires merged Variant Calling Format (`VCF`) files as input files, generated using `GATK4`.<br> 

- [Alignment Steps](https://github.com/FadyMohareb/BSAvis_GP_2020/blob/main/QC_Alignment_VC/alignment_variantCalling/steps/alignment_steps.txt "Alignment Steps")
- [Variant Calling Steps](https://github.com/FadyMohareb/BSAvis_GP_2020/blob/main/QC_Alignment_VC/alignment_variantCalling/steps/variantCalling_steps.txt "Variant Calling Steps")


* `test.RData`
* `test.vcf` 


```R
# script
```

# Author
PlasmoVis was developed by Elisabetta Galatola<br><br>

_Applied Bioinformatics MSc_<br>
_Cranfield University - Cranfield, Bedford, UK_<br>
_Academic Year: 2020-2021_