import Bugsnag from 'bugsnag';

declare module 'egg' {

    // extend app
    interface Application {
        bugsnag: Bugsnag;
    }

    // extend your config
    interface EggAppConfig {
        bugsnag:{
            key: '';
        };
    }

}