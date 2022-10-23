terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file("sweet-treats-355403-1441446b74a9.json")

  project = var.project_id
  region  = var.region
  zone    = var.zone
}

resource "google_cloud_run_service" "sweet_treats" {
  name     = "sweet-treats"
  location = var.region
  template {
    spec {
      containers {
        image = "gcr.io/sweet-treats-355403/github.com/joe2773/sweet-treats@sha256:6a5f52fac5cf064e1ffa7867c912325724e6900a6c0233256fb59eaf319cefb8"
      }
      }
    }
   traffic {
      percent         = 100
      latest_revision = true
  }
}