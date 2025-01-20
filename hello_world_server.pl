:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).

% Define the root URL handler
:- http_handler('/', say_hello, []).

% Define the response when the root URL is accessed
say_hello(_Request) :-
    % format('Content-type: text/html~n~n'),
    % format('<html><body><h1>Hello, World!</h1></body></html>').

    format('Content-type: text/plain~n~n'),
    format('Hello, World Bitches!~n').

% Start the server on port 8080
start :-
    http_server(http_dispatch, [port(8080)]).

% Stop the server
stop :-
    http_stop_server(8080, []).  % stops the server on port 8080

restart :-
    stop,
    [hello_world_server],
    start.



% To start running swi-prolog run `swipl`
% Use `[hello_world_server].`  to start the entire applicaiton
% Use `start.` to begin the server
% Use `restart.` to restart the server anytime you make any changes to the main file.
% To stop the entire program use `halt.`