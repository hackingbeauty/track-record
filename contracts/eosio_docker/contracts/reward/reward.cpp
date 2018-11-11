#include <eosiolib/eosio.hpp>

using namespace eosio;

// Smart Contract Name: reward
// start_date: project start date
// bonus_period: e.g. 8 days, a project completed less than this period will receive 20% bonus
// target_period: e.g. 10 days, project completed less than or equal to this period is on time
// grace_period: e.g. 12 days, project completed less than or equal to this period will be paid
//
// because everything is transparent, people can see whether the job seeker is striving
// to meet the target date.
//
// The logic:
// When receiving check how many days does it take for the project to complete. days_of_completion
// if days_of_completion <= bonus_period, paid with 20% bonus
// if days_of_completion <= target_period, paid 
// if days_of_completion >= grace_period, paid with 20% penalty
// else (longer than grace period), no payment.
//
// the reward contract is triggered whenn the parties indicate that the project is complete
//
// Once the worker accepts the job, the job is changed to "WIP" status
// In case the worker indicates "couldn't complete the project", the job returns to NEW status
// If the worker didn't complete the job by the grace period, the job returns to NEW status
//
// Table struct:
//   rewardstruct: multi index table to store the rewards
//     user(name): account name for the user, serving as primary key
//     job_number(uint16)
//     job_status(string): three possble values
//     timestamp(uint64): the store the last update block time
//     start_date (uint64);
//     bonus_period (uint16);
//     target_period (uint16);
//     grace_period (unit16);
// Public method:
//   isnewuser => to check if the given account name has reward in table or not
// Public actions:
//   update => put the reward into the multi-index table and sign by the given account

// Replace the contract class name when you start your own project
CONTRACT reward : public eosio::contract {
  private:
    bool isnewuser( name user ) {
      // get rewards by using secordary key
      auto reward_index = _rewards.get_index<name("getbyuser")>();
      auto reward_iterator = reward_index.find(user.value);

      return reward_iterator == reward_index.end();
    }

    TABLE jobstruct {
      //uint64_t      prim_key;  // primary key
      name          user;      // account name for the user, each user has a vector <job>, for demo, limit to one user one job
      uint16_t      job_num;
      std::string   job_status;      // the status: NEW, WIP, COMPLETE
      uint64_t      reward_tokens;   // it includes bonus or penalty
      uint64_t      timestamp; // the store the last update block time
      uint64_t      start_date;
      uint16_t      bonus_period;   //12 tokens
      uint16_t      target_period;  //10 tokens
      uint16_t      grace_period;   //8 tokens
      // primary key
      auto primary_key() const { return user.value; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< name("rewardstruct"), rewardstruct,
      indexed_by< name("getbyuser"), const_mem_fun<rewardstruct, uint64_t, &rewardstruct::get_by_user> >
      > reward_table;

    reward_table _rewards;

  public:
    using contract::contract;

    // constructor
    reward( name receiver, name code, datastream<const char*> ds ):
                contract( receiver, code, ds ),
                _rewards( receiver, receiver.value ) {}

    // the worker has pressed "finished" button
    ACTION compensate( name user, uint64_t& completion_date ) {
      // to sign the action with the given account
      require_auth( user );
      require(job_status = WIP);
      days_of_completion = compute_days(start_date, completion_date)
      if (days_of_completion <= bonus_period) {
        job_status = COMPLETE;
        reward_token = compensation_token * 1.2; // 20% bonus
      } else if (days_of_completion <= target_period) {
        job_status = COMPLETE;
        reward_token = compensation_token;
      } else if (days_of_completion <= grace_period) }
        job_status = COMPLETE;
        reward_token = compensation_token * 0.8; // 20% penalty
      } else {
        reward_token = 0;
      }

      // through cleos,
      // cleos create key --to-console
      // cleos create key --to-console
      // cleos wallet import --private-key **PRIVATEKEY1**
      // cleos wallet import --private-key **PRIVATEKEY2**
      // cleos create account reward eosio.token **PUBLICKEY1** **PUBLICKEY2**
      // cleos set contract reward /contracts/reward -p reward

      //cleos push action eosio.token transfer '[ "reward", "jennifer", "25.0000 JOB", "m" ]' -p reward@active
    }
    // Alternative is to use def
    // https://developers.eos.io/eosio-cpp/reference#send_deferred
    // send_deferred, cancel_deferred

    // a worker has accepted the project so others can't take it.
    ACTION accept_work( name user, std::string& job_status ) {
      // to sign the action with the given account
      require_auth( user );
      job_status = WIP;
    }

    // the worker indicates "couldn't do the work due to schedule change, etc"
    // the earlier the worker gives the indication, the better, so the job can go to another worker
    //
    ACTION quit_work( name user, std::string& job_status ) {
      // to sign the action with the given account
      require_auth( user );
      job_status = NEW;
    }
};

// specify the contract name, and export a public action: update
EOSIO_DISPATCH( reward, (accept_work, compensate, quit_work) )
