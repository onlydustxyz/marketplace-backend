/// Constructs an event at the error level.
///
/// This functions similarly to the [`tracing::error!`] macro. However, the current trace_id and
/// span_id are automatically added as fields.
///
/// # Examples
///
/// ```rust
/// use olog::error;
/// # fn main() {
///
/// let (err_info, port) = ("No connection", 22);
///
/// error!(port, error = %err_info);
/// error!(target: "app_events", "App Error: {}", err_info);
/// error!({ info = err_info }, "error on port: {}", port);
/// # }
/// ```
#[macro_export]
macro_rules! error {
	(target: $target:expr, parent: $parent:expr, { $($field:tt)* }, $($arg:tt)* ) => (
        $crate::tracing::event!(target: $target, parent: $parent, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($field)* }, $($arg)*)
    );
    (target: $target:expr, parent: $parent:expr, $($k:ident).+ $($field:tt)+ ) => (
        $crate::tracing::event!(target: $target, parent: $parent, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ $($field)+ })
    );
    (target: $target:expr, parent: $parent:expr, ?$($k:ident).+ $($field:tt)+ ) => (
        $crate::tracing::event!(target: $target, parent: $parent, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ $($field)+ })
    );
    (target: $target:expr, parent: $parent:expr, %$($k:ident).+ $($field:tt)+ ) => (
        $crate::tracing::event!(target: $target, parent: $parent, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ $($field)+ })
    );
    (target: $target:expr, parent: $parent:expr, $($arg:tt)+ ) => (
        $crate::tracing::event!(target: $target, parent: $parent, $crate::tracing::Level::ERROR, {trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!() }, $($arg)+)
    );
    (parent: $parent:expr, { $($field:tt)+ }, $($arg:tt)+ ) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($field)+ },
            $($arg)+
        )
    );
    (parent: $parent:expr, $($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ = $($field)*}
        )
    );
    (parent: $parent:expr, ?$($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+ = $($field)*}
        )
    );
    (parent: $parent:expr, %$($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), %$($k).+ = $($field)*}
        )
    );
    (parent: $parent:expr, $($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+, $($field)*}
        )
    );
    (parent: $parent:expr, ?$($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+, $($field)*}
        )
    );
    (parent: $parent:expr, %$($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), %$($k).+, $($field)*}
        )
    );
    (parent: $parent:expr, $($arg:tt)+) => (
        $crate::tracing::event!(
            target: module_path!(),
            parent: $parent,
            $crate::tracing::Level::ERROR,
            {trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!() },
            $($arg)+
        )
    );
    (target: $target:expr, { $($field:tt)* }, $($arg:tt)* ) => (
        $crate::tracing::event!(target: $target, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($field)* }, $($arg)*)
    );
    (target: $target:expr, $($k:ident).+ $($field:tt)* ) => (
        $crate::tracing::event!(target: $target, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ $($field)* })
    );
    (target: $target:expr, ?$($k:ident).+ $($field:tt)* ) => (
        $crate::tracing::event!(target: $target, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+ $($field)* })
    );
    (target: $target:expr, %$($k:ident).+ $($field:tt)* ) => (
        $crate::tracing::event!(target: $target, $crate::tracing::Level::ERROR, { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ $($field)* })
    );
    (target: $target:expr, $($arg:tt)+ ) => (
        $crate::tracing::event!(target: $target, $crate::tracing::Level::ERROR, {trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!() }, $($arg)+)
    );
    ({ $($field:tt)+ }, $($arg:tt)+ ) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($field)+ },
            $($arg)+
        )
    );
    ($($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ = $($field)*}
        )
    );
    (?$($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+ = $($field)*}
        )
    );
    (%$($k:ident).+ = $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), %$($k).+ = $($field)*}
        )
    );
    ($($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+, $($field)*}
        )
    );
    (?$($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+, $($field)*}
        )
    );
    (%$($k:ident).+, $($field:tt)*) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), %$($k).+, $($field)*}
        )
    );
    (?$($k:ident).+) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), ?$($k).+ }
        )
    );
    (%$($k:ident).+) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), %$($k).+ }
        )
    );
    ($($k:ident).+) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!(), $($k).+ }
        )
    );
	($($arg:tt)+) => (
        $crate::tracing::event!(
            target: module_path!(),
            $crate::tracing::Level::ERROR,
            { trace_id = $crate::trace_id_str!(), span_id = $crate::span_id_str!() },
            $($arg)+
        )
    );
}

#[cfg(test)]
mod tests {
	use anyhow::anyhow;
	use thiserror::Error;
	use tracing::Level;

	use crate::IntoField;

	#[derive(Debug, Error)]
	enum InnerError {
		#[error("b")]
		Foo(#[from] anyhow::Error),
	}

	#[derive(Debug, Error)]
	enum SomeError {
		#[error("a")]
		Internal(#[from] InnerError),
	}

	#[test]
	fn error() {
		error!(foo = ?3, bar.baz = %2, quux = false);
		error!(foo = 3, bar.baz = 2, quux = false);
		error!(foo = 3, bar.baz = 3,);
		error!("foo");
		error!("foo: {}", 3);
		error!(foo = ?3, bar.baz = %2, quux = false, "hello world {:?}", 42);
		error!(foo = 3, bar.baz = 2, quux = false, "hello world {:?}", 42);
		error!(foo = 3, bar.baz = 3, "hello world {:?}", 42,);
		error!({ foo = 3, bar.baz = 80 }, "quux");
		error!({ foo = 2, bar.baz = 79 }, "quux {:?}", true);
		error!({ foo = 2, bar.baz = 79 }, "quux {:?}, {quux}", true, quux = false);
		error!({ foo = 2, bar.baz = 78 }, "quux");
		error!({ foo = ?2, bar.baz = %78 }, "quux");
		error!(target: "foo_events", foo = 3, bar.baz = 2, quux = false);
		error!(target: "foo_events", foo = 3, bar.baz = 3,);
		error!(target: "foo_events", "foo");
		error!(target: "foo_events", "foo: {}", 3);
		error!(target: "foo_events", { foo = 3, bar.baz = 80 }, "quux");
		error!(target: "foo_events", { foo = 2, bar.baz = 79 }, "quux {:?}", true);
		error!(target: "foo_events", { foo = 2, bar.baz = 79 }, "quux {:?}, {quux}", true, quux =
		false);
		error!(target: "foo_events", { foo = 2, bar.baz = 78, }, "quux");
		let foo = 1;
		error!(?foo);
		error!(%foo);
		error!(foo);
		error!(target: "foo_events", ?foo);
		error!(target: "foo_events", %foo);
		error!(target: "foo_events", foo);
		error!(target: "foo_events", ?foo, true, "message");
		error!(target: "foo_events", %foo, true, "message");
		error!(target: "foo_events", foo, true, "message");

		let err = SomeError::from(InnerError::from(anyhow!("c")));
		error!(error = err.to_field(), "message");

		let err = anyhow!("foo");
		error!(error = err.to_field(), "message");
	}

	#[test]
	fn error_inside_span() {
		let span = tracing::span!(Level::ERROR, "my span");
		let _enter = span.enter();
		error();
	}
}
