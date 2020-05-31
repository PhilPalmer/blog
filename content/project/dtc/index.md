---
title: DTC support
summary: Bioinformatics pipeline development for Direct To Consumer (DTC) genetics companies
tags:
- Bioinformatics
- Web Development
- Illumina
- DTC
- Lifebit
- Nextflow
- Docker
- R
- Python
- RShiny
- DNA
- Variant Calling
- SNPs analysis
- Imputation
date: "2020-04-29T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

links:
- name: Dragen pipeline
  url: https://blog.lifebit.ai/2019/09/20/achieve-federated-standardised-cloud-native-secondary-genomics-analysis-in-a-heartbeat-with-dragen-deploit/
- name: Imputation pipeline
  url: https://blog.lifebit.ai/2019/08/29/filling-in-the-blanks-for-direct-to-consumer-genetic-testing-companies-delivering-industrys-fastest-most-scalable-imputation-method//
- name: Imputation benchmark
  url: https://blog.lifebit.ai/2019/08/29/filling-in-the-blanks-for-direct-to-consumer-genetic-testing-companies-delivering-industrys-fastest-most-scalable-imputation-method/
- name: Imputation RShiny app
  url: https://philpalmer.shinyapps.io/lifebit/
- name: Ancestry pipeline
  url: https://blog.lifebit.ai/2019/10/02/how-growing-consumer-demand-for-ancestry-dna-testing-is-creating-new-challenges-for-dtc-testing-companies/
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

Customer support & bioinformatics pipeline development for Direct To Consumer (DTC) genetics companies such as Sano & Nebula Genomics.

For example, I developed and improved multiple bioinformatics pipelines based on user feedback including:
- [Dragen](https://blog.lifebit.ai/2019/09/20/achieve-federated-standardised-cloud-native-secondary-genomics-analysis-in-a-heartbeat-with-dragen-deploit/)
    - Developed Nextflow pipeline for running Illumina's Dragen pipeline including indexing, mapping, germline/somatic variant calling & copy number variant (CNV) analysis
- [Imputation](https://blog.lifebit.ai/2019/08/29/filling-in-the-blanks-for-direct-to-consumer-genetic-testing-companies-delivering-industrys-fastest-most-scalable-imputation-method/)
    - [Benchmarked](https://blog.lifebit.ai/2019/05/30/what-is-the-best-imputation-pipeline/) multiple imputation pipelines
    - Greatly improved Lifebit's imputation pipeline by adding [input validation](https://github.com/awreynolds/DTC_genomics_convertor/blob/master/validate_23AndMe.R) & continuous integration testing. This resulted in a highly robust imputation pipeline used in production by direct to consumer genetics companies such as Nebula Genomics and Sano Genetics thousands of times to analyse their customers’ data.
    - Built imputation [RShiny app](https://philpalmer.shinyapps.io/lifebit/)
- [Ancestry](https://blog.lifebit.ai/2019/10/02/how-growing-consumer-demand-for-ancestry-dna-testing-is-creating-new-challenges-for-dtc-testing-companies/)
    - Developed Lifebit's intial Ancestry pipeline
