use async_trait::async_trait;

#[async_trait]
pub trait Port:
	super::issue::Port + super::pull_request::Port + super::repo::Port + super::user::Port
{
}
