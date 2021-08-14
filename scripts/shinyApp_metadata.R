# Shiny App to quickly visualise SQLite queries (Pladmodium metadata)
# Note: CHANGE/check file directories before running
# -----------------------------------------------------------------------------

#                                   Thesis Project (2020-2021)
#                           Genomic Variant Browser for P. malariae

#                                   Elisabetta Galatola

# -----------------------------------------------------------------------------

# Install packages 
#install.packages(c("shiny", "DBI", "RSQLite"))

# -----------------------------------------------------------------------------

# run from here!

if (interactive()) {
  # load libraries
  library("shiny")
  library("DBI")
  library("RSQLite")
  
  # shiny app user interface 
  ui <- fluidPage(
    titlePanel("P. knowlesi"),
    tableOutput("tbl1"),
    tableOutput("tbl2"),
    titlePanel("P. malariae"),
    tableOutput("tbl3"),
    tableOutput("tbl4")
   )
  
  # shiny app server
  server <- function(input, output, session) {
    
# -----------------------------------------------------------------------------
#                                   P. knowlesi
# -----------------------------------------------------------------------------
# group by location
    output$tbl1 <- renderTable({
      conn <- dbConnect(RSQLite::SQLite(), 
                        ## set db directory
                        dbname = "/Users/lisy/Desktop/Cranfield/Thesis/data/test.sqlite")
      
      on.exit(dbDisconnect(conn), add = TRUE)
      
      dbGetQuery(conn, paste0(
        'SELECT location, COUNT(location) AS tot_samples FROM metadata GROUP BY location;'))
    })   
# group by pca_group    
    output$tbl2 <- renderTable({
      conn <- dbConnect(RSQLite::SQLite(), 
                        ## set db directory
                        dbname = "/Users/lisy/Desktop/Cranfield/Thesis/data/test2.sqlite")
      
      on.exit(dbDisconnect(conn), add = TRUE)
      
      dbGetQuery(conn, paste0(
        'SELECT group_pca, COUNT(group_pca) AS groups FROM metadata GROUP BY group_pca;'))
    })
  
  
# -----------------------------------------------------------------------------
#                                   P. malariae
# -----------------------------------------------------------------------------
# group by Country
      output$tbl3 <- renderTable({
      conn <- dbConnect(RSQLite::SQLite(), 
                        ## set db directory
                        dbname = "/Users/lisy/Desktop/Cranfield/Thesis/data/Pmalariae_metadata.sqlite")
      
      on.exit(dbDisconnect(conn), add = TRUE)
      
      dbGetQuery(conn, paste0(
        'SELECT country, COUNT(country) AS counts FROM metadata GROUP BY country;'))
      #'SELECT * FROM metadata;')) # output all metadata info
    })
  
#group by Continent
  output$tbl4 <- renderTable({
    conn <- dbConnect(RSQLite::SQLite(), 
                      ## set db directory
                      dbname = "/Users/lisy/Desktop/Cranfield/Thesis/data/Pmalariae_metadata.sqlite")
    
    on.exit(dbDisconnect(conn), add = TRUE)
    
    dbGetQuery(conn, paste0(
      #'SELECT country, COUNT(country) AS counts FROM metadata WHERE continent="Africa" GROUP BY country;'))
      'SELECT continent, COUNT(continent) AS counts FROM metadata GROUP BY continent;'))
      #'SELECT * FROM metadata;')) # output all metadata info
  })
}

  shinyApp(ui, server)
}

