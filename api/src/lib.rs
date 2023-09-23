extern crate dotenv;

pub mod application;
pub mod domain;
pub mod infrastructure;
pub mod models;
pub mod presentation;

mod config;
pub use config::Config;

#[macro_use]
extern crate rocket;

#[macro_use]
extern crate diesel;

#[macro_use]
extern crate derive;

#[macro_use]
extern crate domain as common_domain;
