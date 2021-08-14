library(dplyr)

metadata <- read.table("pm_global_metadata_toshare.csv", sep = ",", header = T)
listOfSamples <- read.table("Pm_listOfSamples.tsv")

metadata2 <- metadata %>% right_join(listOfSamples, by = c("current_fastq" = "V1"))

write.csv(metadata2, "Metadata_172.csv")

write.csv(metadata2 %>%
        filter(Continent == "Americas") %>% select(current_fastq),
            "Americas_6.txt", quote = F, row.names = F)

write.csv(metadata2 %>%
        filter(Continent == "Africa") %>%
        select(current_fastq), "Africa_143.txt", quote = F, row.names = F)

write.csv(metadata2 %>%
        filter(Continent == "Asia") %>%
        select(current_fastq), "Asia_21.txt", quote = F, row.names = F)

library(VariantAnnotation)
library(dplyr)

setwd("~/Pmalariae_GenomeBrowser/")
americas_other <- read.table("Americas_other_Fst.weir.fst", header = T) %>%
    mutate(Fst = ifelse(WEIR_AND_COCKERHAM_FST < 0, 0,
        WEIR_AND_COCKERHAM_FST))

africa_other <- read.table("Africa_other_Fst.weir.fst", header = T) %>%
    mutate(Fst = ifelse(WEIR_AND_COCKERHAM_FST < 0, 0,
        WEIR_AND_COCKERHAM_FST))

asia_other <- read.table("Asia_other_Fst.weir.fst", header = T) %>%
    mutate(Fst = ifelse(WEIR_AND_COCKERHAM_FST < 0, 0,
        WEIR_AND_COCKERHAM_FST))

chrom <- c("PmUG01_01_v1", "PmUG01_02_v1", "PmUG01_03_v1", "PmUG01_04_v1",
    "PmUG01_05_v1", "PmUG01_06_v1", "PmUG01_07_v1", "PmUG01_08_v1",
    "PmUG01_09_v1", "PmUG01_10_v1", "PmUG01_11_v1", "PmUG01_12_v1",
    "PmUG01_13_v1", "PmUG01_14_v1", "PmUG01_MIT_v1", "PmUG01_API_v1")

vcf_americas <- readVcf("Americas_filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf.gz", chrom)
vcf_asia <- readVcf("Asia_filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf.gz", chrom)
vcf_africa <- readVcf("Africa_filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf.gz", chrom)

info(vcf_americas)$Fst <- americas_other$Fst
info(vcf_asia)$Fst <- asia_other$Fst
info(vcf_africa)$Fst <- africa_other$Fst

writeVcf(vcf_americas, "Americas.Fst.filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf")
writeVcf(vcf_asia, "Asia.Fst.filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf")
writeVcf(vcf_africa, "Africa.Fst.filt.csq.bi.GT.miss0.5.vqslod.filt.snps.vcf")
