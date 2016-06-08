'use strict';
var ModbusRTU = require("../../index");
var TestPort = ModbusRTU.TestPort;
var testPort = new TestPort();
var modbusRTU = new ModbusRTU(testPort);

var sinon = require('sinon');
var expect = require('chai').expect;

describe('Promise', function () {

    describe('Functions', function () {
        it('should bind promise functions on modbusRTU', function () {
            var address = '23',
                arg = 'someArg';

            expect(modbusRTU.readCoils(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.readDiscreteInputs(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.readHoldingRegisters(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.readInputRegisters(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.writeCoil(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.writeRegister(address, arg)).to.be.instanceOf(Promise);
            expect(modbusRTU.writeRegisters(address, arg)).to.be.instanceOf(Promise);
        });
    });

    describe('#setID', function () {
        it('should set a timeout on modubusRtu instance', function () {
            var someId = 1;
            modbusRTU.setID(someId);
            expect(modbusRTU._unitID).to.be.equal(someId);
        });
    });

    describe('#getID', function () {
        it('should set a timeout on modubusRtu instance', function () {
            var someId = 1;
            modbusRTU._unitID = someId;
            expect(modbusRTU.getID()).to.be.equal(someId);
        });
    });

    describe('#setTimeout', function () {
        it('should set a timeout on modubusRtu instance', function () {
            var timeout = 1000;
            modbusRTU.setTimeout(timeout);
            expect(modbusRTU._timeout).to.be.equal(timeout)
        });
    });
});
